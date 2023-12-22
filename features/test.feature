Feature: NPI Portal Login

  Scenario: User logs into NPI Portal with locked account
    Given NPI Portal landing page
    Then After running for 30 seconds cut the banner with cross button
    When Successfully cut the banner 
    Then click on the top right corner on the landing page
    When Successfully clicking on login button
    Then it will re-directed to login page
    And I enter my correct user id and password on the login page
    And I click on the login button
    Then I should see an error message indicating the locked account
