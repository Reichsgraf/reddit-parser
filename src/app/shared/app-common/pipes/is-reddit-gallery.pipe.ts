import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'isRedditGallery'
})
export class IsRedditGalleryPipe implements PipeTransform {

  transform(url: string): boolean {
    return url?.includes('https://www.reddit.com/gallery/');
  }

}
