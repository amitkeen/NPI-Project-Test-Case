
Feature: Redmine Login Functionality

  Scenario: User logs into Redmine with incorrect password
    Given I have the Redmine login page
    Then The login button should be present
    When I open the login page
    And Verify login page
    And I enter my correct user id and incorrect password on the login page
    And I click on the login button
    Then I should see an error message indicating invalid credentials

  Scenario: User logs into Redmine with incorrect username
    Given I have the Redmine login page
    Then The login button should be present
    When I open the login page
    And Verify login page
    And I enter an incorrect user id and correct password on the login page
    And I click on the login button
    Then I should see an error message indicating invalid credentials

  Scenario: User logs into Redmine wrong entering credentials
    Given I have the Redmine login page
    Then The login button should be present
    When I open the login page
    And Verify login page
    And I Enter wrong the user id and password on the login page
    And I click on the login button
    Then I should see an error message indicating missing credentials


  Scenario: User logs into Redmine with correct credentials
    Given I have the Redmine login page
    Then The login button should be present
    When I open the login page
    And Verify login page
    And I enter my correct user id and password on the login page
    And I click on the login button
    Then I should be logged into Redmine
