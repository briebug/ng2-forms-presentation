/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TemplateFormComponent } from './template-form.component';

describe('Component: TemplateForm', () => {
    it('should create an instance', inject([TemplateFormComponent],
        (component: TemplateFormComponent) => {
            expect(component).toBeDefined();
        }));
});
