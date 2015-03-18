UploadServer.init({
  tmpDir: process.env.PWD + '/public/images/tmp',
  uploadDir: process.env.PWD + '/public/images',
  checkCreateDirectories: true //create the directories for you
});