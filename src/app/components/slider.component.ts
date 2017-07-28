import { Component } from '@angular/core';
import { SliderService } from '../services/slider.service';
import * as $ from 'jquery';

@Component({
  selector:'slider',
  templateUrl:'../templates/slider.html',
  styleUrls:['../styles/slider.css']
})
export class SliderComponent {
  constructor(private sliderService:SliderService){
    setInterval(() => {
      this.Slide(this.CurrentPosition + 1);
    }, 10000);
  }
  Images:Array<string> = [
    'http://i.playground.ru/i/39/28/42/00/blog/content/53jdjyvl.jpg',
    'http://prey.bethesda.net/assets/meta/Prey_screen_shot.jpg',
    'http://www.gamer.ru/system/attached_images/images/000/727/429/original/prey-1.jpg',
    'http://u.kanobu.ru/screenshots/27/4dcd50d3-ed68-494f-b0dd-d2c4720c3cd2.jpg'
  ];
  CurrentPosition:number = 1;
  Margin:number = 0;

 Slide(index){
    if (this.CurrentPosition != index){
    this.Margin = this.sliderService.Slide(index, this.Images, this.Margin, this.CurrentPosition).margin;
    this.CurrentPosition = this.sliderService.Slide(index, this.Images, this.Margin, this.CurrentPosition).current;

     $("#container").animate({
      marginLeft:'-' + this.Margin + 'px'
      },1000);
    }
  }
}
