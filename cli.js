#!/usr/bin/env node

// Nexe: workaround dynamic requires
if (false) {
  require('async');
  require('osenv');
  require('child_process');
}

require('./watch');
