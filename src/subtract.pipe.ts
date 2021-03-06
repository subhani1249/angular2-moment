/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */

import {Pipe, ChangeDetectorRef, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'amSubtract' })
export class SubtractPipe implements PipeTransform {
    transform(value: any, ...args: string[]): any {
        if (typeof args === 'undefined' || args.length !== 2) {
            throw new Error('SubtractPipe: missing required arguments');
        }
        return moment(value).subtract(args[0], args[1]);
    }
}
