/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {get, make, set, Store} from '../index';

describe('safari-jit-fix store', () => {
  it('initializes store with the provided value', () => {
    const store = make(123);
    expect(get(store)).toBe(123);
  });

  it('works with null and undefined initial values', () => {
    const nullStore = make<string | null>(null);
    expect(get(nullStore)).toBeNull();

    const undefStore = make<string | undefined>(undefined);
    expect(get(undefStore)).toBeUndefined();
  });

  it('updates store value and returns the previous value', () => {
    const store = make('initial');
    const prev = set(store, 'updated');

    expect(prev).toBe('initial');
    expect(get(store)).toBe('updated');
  });
});
