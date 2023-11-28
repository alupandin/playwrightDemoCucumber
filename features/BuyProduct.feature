Feature: Buying a product form the store page

  Background:
    Given User with credentials
    When they attempt to sign into app
    Then login is successful

  Scenario Outline: Buying a product of interest
    Given user navigate to store page
    And they select a product to cart
      | productName   |
      | <productName> |
    When they attempt to checkout
      | firstName   | lastName   | zipPostal   |
      | <firstName> | <lastName> | <zipPostal> |
    Then they successfuly buy the desired product

    @SmokeTest @SauceLabsBackpack
    Examples: Buying a swaglabs backpack
      | productName | firstName          | lastName     | zipPostal |
      | Backpack    | standard_user      | secret_sauce | 66112     |