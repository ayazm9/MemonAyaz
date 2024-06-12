const { execSync } = require('child_process');
const os = require('os');

const platform = os.platform();
let installPackage;

if (platform === 'darwin') {
  // Mac OS X platform
  installPackage = '@next/swc-darwin-x64@15.0.0-rc.0';
} else if (platform === 'linux') {
  // GNU/Linux platform
  installPackage = '@next/swc-linux-x64-gnu@15.0.0-rc.0';
} else if (platform === 'win32') {
  // Windows platform
  const arch = os.arch();
  if (arch === 'x64') {
    installPackage = '@next/swc-win32-x64-msvc@15.0.0-rc.0';
  } else {
    console.error('Unsupported architecture:', arch);
    process.exit(1);
  }
} else {
  console.error('Unsupported platform:', platform);
  process.exit(1);
}

if (installPackage) {
  console.log(`Installing ${installPackage}...`);
  try {
    execSync(`npm install ${installPackage}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to install ${installPackage}`, error);
    process.exit(1);
  }
} else {
  console.error('No package to install for this platform');
  process.exit(1);
}
