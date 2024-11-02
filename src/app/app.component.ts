import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { ICard } from './interfaces/card.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'browserHomePage';

  cardItems: ICard[] = [
    {
      img: 'github',
      text: 'Git Hub',
      url: 'https://github.com/RogerFernandoBR',
    },
    {
      img: 'googleDrive',
      text: 'Google Drive',
      url: 'https://drive.google.com/drive/u/0/my-drive',
    },
    {
      img: 'vercel',
      text: 'Vercel',
      url: 'https://vercel.com/roger-fernandos-projects',
    },
    {
      img: 'notion',
      text: 'Notion',
      url: 'https://www.notion.so/e7eecfd4823f4df39d450139cdaee01a',
    },
    {
      img: 'figma',
      text: 'Figma',
      url: 'https://www.figma.com/files/team/842962119672565068/recents-and-sharing?fuid=842962118346390934',
    },
    {
      img: 'chatGpt',
      text: 'Chat GPT',
      url: 'https://chatgpt.com/',
    },
    {
      img: 'miro',
      text: 'Miro',
      url: 'https://keep.google.com/u/0/',
    },
    {
      img: 'clear',
      text: 'Clear',
      url: 'https://corretora.clear.com.br/',
    },
    {
      img: 'contabilizei',
      text: 'Contabilizei',
      url: 'https://app.contabilizei.com.br/painel-de-controle/#/home',
    },
    {
      img: 'registroBr',
      text: 'Registro BR',
      url: 'https://registro.br/login/',
    },
    {
      img: 'fies',
      text: 'Fies',
      url: 'https://login.caixa.gov.br/auth/realms/internet/protocol/openid-connect/auth?response_type=code&client_id=cli-web-fes-devops&redirect_uri=https%3A%2F%2Ffies.caixa.gov.br%2Ffes-web%2F&state=49a614f1-f341-49d1-b742-ce08e24fd498&login=true&scope=openid',
    },
    {
      img: 'codepen',
      text: 'Codepen',
      url: 'https://codepen.io/trending',
    },
    {
      img: 'linkedin',
      text: 'Linkedin',
      url: 'https://www.linkedin.com/feed/',
    },
    {
      img: 'medium',
      text: 'Medium',
      url: 'https://medium.com/@rogerfernandodeoliveira',
    },
    {
      img: 'facebook',
      text: 'Facebook',
      url: 'https://www.facebook.com/rogerfernandodeoliveiracarvalho/?locale=pt_BR',
    },
    {
      img: 'instagram',
      text: 'Instagram',
      url: 'https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13534421690&extra_1=s%7Cc%7C547348930993%7Ce%7Cinstagram%20%27%7C&placement=&creative=547348930993&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13534421690%26adgroupid%3D126262409974%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D9102361%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=CjwKCAjw-JG5BhBZEiwAt7JR67kpROYdrS3ZUgF_pi5aBrc39Ngd4TazLNZykq8rsOi7PgdwXxtc-hoCb6cQAvD_BwE',
    },
    {
      img: 'copel',
      text: 'Copel',
      url: 'https://www.copel.com/avaweb/paginaLogin/login.jsf',
    },
    {
      img: 'youtube',
      text: 'Youtube',
      url: 'https://www.youtube.com/',
    },
    {
      img: 'netflix',
      text: 'Netflix',
      url: 'https://www.netflix.com/browse',
    },
    {
      img: 'crunchyroll',
      text: 'Git Hub',
      url: 'https://www.crunchyroll.com/pt-pt/',
    },
    {
      img: 'spotfy',
      text: 'Spotfy',
      url: 'https://open.spotify.com/user/12145116942',
    },
    {
      img: 'rogerCarvalho',
      text: 'Roger Carvalho',
      url: 'https://github.com/RogerFernandoBR',
    },
    {
      img: 'amazonMusic',
      text: 'Amazon Music',
      url: 'https://www.amazon.com.br/',
    },
    {
      img: 'apartamento',
      text: 'Apartamento',
      url: 'https://morador.apcontrole.com.br/dashboard',
    },
  ];

  constructor() {}

  flipIn() {
    const audio = new Audio;
    audio.src = '/assets/audio/1.mp3';
    audio.play();
  }

  flipOut() {
    const audio = new Audio;
    audio.src = '/assets/audio/12.mp3';
    audio.play();
  }

  openCard() {
    const audio = new Audio;
    audio.src = '/assets/audio/4.mp3';
    audio.play();
  }
}
