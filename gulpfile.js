const gulp = require("gulp");
const run = require("gulp-run-command").default;

const HOME_DIR  = "../../";
const WATCH_DIR = "./keymap/user/**";

const BUILD_AIR = `kmonad ./keymap/user/molleweide/macbook_air_2021_m1.kbd -d`;
const BUILD_MBP = `kmonad ./keymap/user/molleweide/macbook_pro_2012.kbd -d`;
const BUILD_EZ  = `kmonad ./keymap/user/molleweide/ergodox_ez.kbd -d`;

gulp.task(
  "build",
  gulp.series(
    run(BUILD_AIR, {
      ignoreErrors: true,
    }),
    run(BUILD_MBP, {
      ignoreErrors: true,
    }),
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
