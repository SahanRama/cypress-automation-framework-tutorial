/// <reference types="cypress" />

describe("Alias and Invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
    cy.get('@productThumbnail').its('length').should('be.gt', 5)
    cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
  });

  it("Validate a thumbnails count on home page", () => {
    cy.visit("https://automationteststore.com/")
    cy.get(".thumbnail").as('productThumbnail')
    cy.get('@productThumbnail').should('have.length', 16)
    cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('contain', "Add to Cart")
  });

  it.only("Calculate total and sale products", () => {
    cy.visit("https://automationteststore.com/")
    //cy.get(".thumbnail").as('productThumbnail')
    // cy.get('@productThumbnail').find('.oneprice').each(($ele,index,$list) => {
    //   cy.log($ele.text())
    // })
    let itemsTotal = 0
    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
    cy.get('@itemPrice').then($priceList => {
      let itemPrice = $priceList.split('$')
      let nonSalePriceItemTotal = 0
      for (let i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i])
        nonSalePriceItemTotal += Number(itemPrice[i])
      }
      itemsTotal += nonSalePriceItemTotal
      cy.log('Non sale price items total :$'+nonSalePriceItemTotal)
    })

    cy.get('@saleItemPrice').then($priceList => {
      let saleItemsPrice =0
      let saleItemList = $priceList.split('$')
      for (let i = 0; i < saleItemList.length; i++) {
        cy.log(saleItemList[i])
        saleItemsPrice += Number(saleItemList[i])
      }
      itemsTotal += saleItemsPrice
      cy.log('Sale item price total : $'+saleItemsPrice)
    })
    .then(()=>{
      cy.log('The price of all items :' + itemsTotal)
      expect(itemsTotal).to.equal(639.49)
    })
  });
});
