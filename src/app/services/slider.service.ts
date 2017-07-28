import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class SliderService {
  constructor(private title:Title){
    this.title.setTitle("Home Page");
  }

  Slide(index, images, Margin, position){
    //HAPPEN IF YOU TRY TO SLIDE WHEN THE CURRENT POSITION IS MIN (LEFT BUTTON)
    if (index == 0){
      let margin = $("#slider").width() * (images.length - 1);
      Margin += margin;
      return { current:images.length, margin:Margin };
    }

    //HAPPEN IF YOU TRY TO SLIDE WHEN THE CURRENT POSITION IS MAX (RIGHT BUTTON)
    else if (index > images.length){
      console.log(images.length);
      let margin = $("#slider").width() * (images.length - 1);
      Margin -= margin;
      return { current:1, margin:Margin };
    }
    //SLIDE BACK
    else if (position < index){
      let margin = $("#slider").width() * (index - position);
      Margin += margin;
      return { current:index, margin:Margin };
    }
    //SLIDE NEXT
    else if (position > index){
      let margin = $("#slider").width() * (position - index);
      Margin -= margin;
      return { current:index, margin:Margin };
    }
  }
}
