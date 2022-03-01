# Contributing

## How can I contribute?
- Fix a bug you found or already reported.
- Add new features to the project.
- Create new themes  
- Add new test cases.
- Add documentation.
- Add a demo page.

## How to contribute code?
Here are the basic steps to get started contributing code:

1. Fork the repository.
2. Install the dependencies, run `npm install`.
3. Start the project, run `npm start`.
4. Replicate the issue you're trying to fix or spec out the feature you're trying to add.
5. Modify the code to fix the bug or to add the feature. All changes should happen in the relevant `src/` files.
6. Verify that your fix or feature works.
7. Run the test cases by running `npm test`, you can also add more test cases based on your new change.
8. Build the code by running `npm run build`.
9. Commit your changes with an informative description.
10. Open a pull request with a descriptive message about what the PR does.

Thank you for your contribution!

##### Notes for pull request
- Follow the same code style as the library.
- Run the test suites in the `test` directory first by running `npm test`.
- Don't modify any files in the `dist` directory.
- Don't alter the licence headers.  

## Reporting bugs
#### Make sure it is a bug related to this project
Before reporting the bug, please make sure that the bug is in the project and not from your own code or any other library used.

#### Try the latest version
Bugs in the older versions of the project may have already been fixed.
In order to avoid reporting known issues, make sure you are always testing against the latest release.
Also make sure the problem hasn't already been reported on the GitHub Issues Tracker.
If not, create a new issue there and include your test case.
