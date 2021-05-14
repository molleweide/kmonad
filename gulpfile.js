const gulp = require("gulp");
const run = require("gulp-run-command").default;

const HOME_DIR  = "../../";
const WATCH_DIR = "./keymap/user/**";

const BUILD_MBP = `kmonad ./keymap/user/molleweide/mbp.kbd -d`;
const BUILD_EZ  = `kmonad ./keymap/user/molleweide/ez.kbd -d`;

gulp.task(
  "build",
  gulp.series(

    // macbook pro
    run(BUILD_MBP, {
      ignoreErrors: true,
    }),

    // ergodox ez
    run(BUILD_EZ, {
      ignoreErrors: true,
    })

  )
);

gulp.task(
  "watch",
  gulp.series("build", () => {
    gulp.watch(WATCH_DIR, gulp.series("build"));
  })
);

gulp.task("default", gulp.series("watch"));
