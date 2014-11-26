#!/bin/sh

echo "Building the website..."
jekyll build

echo "Copying to /tmp/ directory..."
cp -r _site/ /tmp/_site/

echo "Removing unneeded files and directories..."
cd /tmp/_site/
rm -rf .git*
rm -rf .idea
rm -f *.sublime-workspace
rm -f *.sublime-project
find . -name ".DS_STORE" -delete
find . -name ".DS_Store" -delete

echo "Applying read permissions to all files..."
find . -type f -exec chmod 644 {} \;

echo "Uploading..."
rsync -azh --stats /tmp/_site/ grantde1@grantdev.com:/home1/grantde1/public_html/

echo "Cleaning up..."
rm -rf /tmp/_site/

echo "Done!"