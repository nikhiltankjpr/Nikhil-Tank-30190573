Feature: Student Registration Form

  Scenario Outline: Fill Student Registration Form
    Given User opens student registration form
    When User enters student details "<name>" "<email>" "<mobile>" "<dob>" "<subject>" "<address>" "<state>" "<city>"
    Then Student registration form should be filled successfully


    Examples:
      | name   | email            | mobile     | dob        | subject | address     | state     | city |
      | Nikhil | nikhil@gmail.com | 1234567890 | 2001-01-01 | Physics | ABC Jaipur  | Rajasthan | Agra |
      | Rahul  | rahul@gmail.com  | 9876543210 | 2000-05-15 | Maths   | XYZ Delhi   | Rajasthan | Agra |