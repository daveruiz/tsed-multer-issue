import {Controller, Get, MultipartFile, PlatformMulterFile, Post} from "@tsed/common";

@Controller("/")
export class CalendarCtrl {
  @Get()
  test() {
    return "Running!";
  }

  @Post('/upload')
  upload(@MultipartFile("file") file?: PlatformMulterFile) {
    if (!file) {
        return 'No file uploaded!';
    }

    const { originalname, size, mimetype } = file;

    return { originalname, size, mimetype };
  }
}