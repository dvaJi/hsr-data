import type { Character } from './types/characters';
import type { LightCone } from './types/lightcones';
import type { Relic } from './types/relics';
import type { Achievement } from './types/achievements';
import type { Element } from './types/elements';
import type { Items } from './types/items';
import type { Messages } from './types/messages';

export type { Character, LightCone, Relic, Achievement, Element };

export const languages = [
  'en',
  'es',
  'jp',
  'cn',
  'cht',
  'fr',
  'de',
  'id',
  'kr',
  'pt',
  'ru',
  'th',
  'vi',
] as const;

export type Languages = (typeof languages)[number];

type Folders =
  | 'characters'
  | 'lightcones'
  | 'relics'
  | 'elements'
  | 'achievements'
  | 'items'
  | 'messages';

export interface Options {
  language: Languages;
}

export interface QueryOpts<T> {
  select?: (keyof T)[];
}

export default class HSRData {
  options: Options = {
    language: 'en',
  };

  constructor(opts?: Options) {
    if (opts) {
      this.options = { ...this.options, ...opts };
    }
  }

  setOptions(opts: Options) {
    this.options = { ...this.options, ...opts };
  }

  getOptions(): Options {
    return this.options;
  }

  getLang(): Languages {
    return this.options.language;
  }

  async characters(query?: QueryOpts<Character>): Promise<Character[]> {
    const lang = this.getLang();
    return await this.findByFolder(lang, 'characters', query);
  }

  async characterbyId(
    id: string,
    query?: QueryOpts<Character>
  ): Promise<Character | undefined> {
    const lang = this.getLang();
    return await this.findById(lang, 'characters', id, query);
  }

  async relics(query?: QueryOpts<Relic>): Promise<Relic[]> {
    const lang = this.getLang();
    return await this.findByFolder(lang, 'relics', query);
  }

  async achievements(query?: QueryOpts<Achievement>): Promise<Achievement[]> {
    const lang = this.getLang();
    return await this.findByFolder(lang, 'achievements', query);
  }

  async lightcones(query?: QueryOpts<LightCone>): Promise<LightCone[]> {
    const lang = this.getLang();
    return await this.findByFolder(lang, 'lightcones', query);
  }

  async elements(query?: QueryOpts<Element>): Promise<Element[]> {
    const lang = this.getLang();
    return await this.findByFolder(lang, 'elements', query);
  }

  async items(query?: QueryOpts<Items>): Promise<Items[]> {
    const lang = this.getLang();
    return await this.findByFolder(lang, 'items', query);
  }

  async messages(query?: QueryOpts<Messages>): Promise<Messages[]> {
    const lang = this.getLang();
    return await this.findByFolder(lang, 'messages', query);
  }

  private async findByFolder<T>(
    lang: Languages,
    folder: Folders,
    query?: QueryOpts<T>
  ): Promise<T[]> {
    let results = (await import(`./min/data_${lang}.min.json`)).default[folder];

    if (query) {
      results = this.selectProps(results, query);
    }

    return results;
  }

  private async findById<T>(
    lang: Languages,
    folder: Folders,
    id: unknown,
    query?: QueryOpts<T>
  ): Promise<T | undefined> {
    const results = await this.findByFolder(lang, folder, query);

    return results.find((r: T) => r['id' as keyof T] === id);
  }

  private selectProps<T>(results: T[], query: QueryOpts<T>): T[] {
    if (query.select) {
      return results.map((result) => {
        const obj: Partial<T> = {};
        query.select?.forEach((key) => {
          obj[key] = result[key];
        });

        return obj as T;
      });
    }

    return results;
  }
}

/**
 * Replace #n[i]% in description based on params value
 *
 *
 * @param desc
 * @param params
 * @returns
 */
export function renderDescription(desc: string, params: number[]): string {
  let str = desc;
  for (let i = 0; i < params.length; i++) {
    const value = roundTwoDecimals(params[i]);
    str = str.replaceAll(`#${i + 1}[i]`, value.toString());
    str = str.replaceAll(`#${i + 1}[f1]%`, roundTwoDecimals(value * 100) + '%');
    str = str.replaceAll(`#${i + 1}[i]%`, roundTwoDecimals(value * 100) + '%');
  }

  return str;
}

function roundTwoDecimals(value: number) {
  return Math.round(value * 100) / 100;
}
