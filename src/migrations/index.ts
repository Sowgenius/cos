import * as migration_20260910_092223_initial from './20260910_092223_initial';

export const migrations = [
  {
    up: migration_20260910_092223_initial.up,
    down: migration_20260910_092223_initial.down,
    name: '20260910_092223_initial'
  },
];
