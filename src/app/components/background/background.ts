import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-background',
  imports: [],
  templateUrl: './background.html',
  styleUrl: './background.css',
})
export class Background implements OnInit {
  ngOnInit() {
    particlesJS('particles-js', {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 500 } },
        color: { value: '#f5c51c' },
        shape: {
          type: 'circle',
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 5 },
          image: { src: 'img/github.svg', width: 100, height: 100 },
        },
        opacity: {
          value: 0.8,
          random: true,
          anim: { enable: false, speed: 0.5, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
          enable: false,
          distance: 500,
          color: '#ffffff',
          opacity: 0.4,
          width: 2,
        },
        enable: true,
        speed: 0.1,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: { enable: true, rotateX: 200, rotateY: 500 },
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: { enable: true, mode: 'bubble' },
          onclick: { enable: false, mode: 'repulse' },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 0.5 } },
          bubble: {
            distance: 200,
            size: 3.3,
            duration: 0.3,
            opacity: 1,
            speed: 4,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
  }
}
