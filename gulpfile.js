const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const { exec } = require("child_process");

// Task to run the "build-css" pnpm script
gulp.task("build-css", (done) => {
  exec("pnpm run build-css", (err, stdout, stderr) => {
    if (err) {
      console.error(`Error executing build-css: ${stderr}`);
      done(err);
    } else {
      console.log(stdout);
      done();
    }
  });
});

// Task to minify HTML
gulp.task("minify-html", () => {
  return gulp
    .src("*.html") // No 'src/' prefix needed since gulpfile.js is in /src
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("../")); // Output to root directory
});

// Task to minify CSS files (excluding input.css)
gulp.task("minify-css", () => {
  return gulp
    .src(["static/*.css", "!static/input.css"]) // Exclude input.css
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("../static")); // Output to /static in the root
});

// Task to minify JavaScript files
gulp.task("minify-js", () => {
  return gulp.src("static/*.js").pipe(uglify()).pipe(gulp.dest("../static")); // Output to /static in the root
});

// Combined task to run "build-css" before minifying CSS
gulp.task("build-and-minify-css", gulp.series("build-css", "minify-css"));

// Default task to run all tasks together
gulp.task(
  "default",
  gulp.parallel("minify-html", "build-and-minify-css", "minify-js")
);
