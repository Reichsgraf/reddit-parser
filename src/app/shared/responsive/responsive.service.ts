import {Injectable} from "@angular/core";
import {DeviceDetectorService} from "ngx-device-detector";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {

  responsiveChangeSubject = new Subject();
  responsiveCheckSubject = new Subject();

  responsiveFormat = 'n/a'; // DESKTOP, MOBILE, TABLET

  constructor(private deviceDetectorService: DeviceDetectorService) {
    // TODO: implement smarter logic with DDS or remove it somewhere in future
    document.addEventListener('resize', () => this.checkResponsiveFormat());
    window.addEventListener('resize', () => this.checkResponsiveFormat());
    this.checkResponsiveFormat();
    // ios keyboard fixes
    (window as any).addEventListener('keyboardDidHide', () => setTimeout(() => this.checkResponsiveFormat()));
    (window as any).addEventListener('keyboardDidShow', () => setTimeout(() => this.checkResponsiveFormat()));
  }

  checkResponsiveFormat() {
    this.responsiveCheckSubject.next(this.responsiveFormat);
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);

    const oldFormat = this.responsiveFormat;

    if (window.innerWidth > 840) {
      this.responsiveFormat = 'DESKTOP';
      document.body.classList.remove('mobile');
      document.body.classList.add('desktop');
    }

    if (window.innerWidth <= 840) {
      this.responsiveFormat = 'MOBILE';
      document.body.classList.remove('desktop');
      document.body.classList.add('mobile');
    }

    if (oldFormat !== this.responsiveFormat) {
      this.responsiveChangeSubject.next(this.responsiveFormat);
    }
  }

}
