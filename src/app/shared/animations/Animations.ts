import {animate, animateChild, group, query, state, style, transition, trigger} from '@angular/animations';

export const openClose =
  trigger('openClose', [
  state('open', style({
    overflow: 'hidden'
  })),
  state('closed', style({
    height: '0px',
    overflow: 'hidden'
  })),
  transition('open <=> closed', [
    animate('.3s ease-in')
  ]),
]);

export const flyInOut = trigger('flyInOut', [
  transition(':enter', [
    style({transform: 'translateX(100%)'}),
    animate('.25s')
  ]),
  transition(':leave', [
    animate('.5s', style({transform: 'translateX(100%)'}))
  ])
]);

export const slideInAnimation =
  trigger('routeAnimations', [

    transition( '* => *', [

      query(':enter',
        [
          style({ opacity: 0 })
        ],
        { optional: true }
      ),

      query(':leave',
        [
          style({ opacity: 1 }),
          animate('0.15s', style({ opacity: 0 }))
        ],
        { optional: true }
      ),

      query(':enter',
        [
          style({ opacity: 0 }),
          animate('0.15s', style({ opacity: 1 }))
        ],
        { optional: true }
      )

    ])

  ]);
