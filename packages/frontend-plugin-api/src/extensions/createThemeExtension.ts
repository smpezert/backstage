/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ThemeBlueprint } from '../blueprints/ThemeBlueprint';
import { createExtension } from '../wiring';
import { AppTheme } from '@backstage/core-plugin-api';

/**
 * @public
 * @deprecated Use {@link ThemeBlueprint} instead.
 */
export function createThemeExtension(theme: AppTheme) {
  return createExtension({
    kind: 'theme',
    namespace: 'app',
    name: theme.id,
    attachTo: { id: 'app', input: 'themes' },
    output: {
      theme: ThemeBlueprint.dataRefs.theme,
    },
    factory: () => ({ theme }),
  });
}

/**
 * @public
 * @deprecated Use {@link ThemeBlueprint} instead.
 */
export namespace createThemeExtension {
  export const themeDataRef = ThemeBlueprint.dataRefs.theme;
}
