# WordCounter

This is a simple word counter. You just type any number of words into the text area, click "Submit", and a message should pop up telling you how many words you have inputted. From there, you can modify the words you have already typed or click "Clear" to start over. Have fun!

I've counted the words with the following assumptions:
 - Spaces alone are used to denote the separation of words, e.g. "jump.run" is counted as a single word.
 - Punctuation on its own counts as a word, e.g. "peter . is cool" is counted as four words.
 - Spaces only counts as empty text, e.g. "           " is counted as zero words and will instead print an error message


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3. Though it might seem like overkill to use a framework like Angular for such a simple project, I did so because this would make new features easier to add should they be needed.

## How to run

You will need the Angular CLI. You can get it with the command `npm install -g @angular/cli`.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
