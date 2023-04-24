import type { Character } from './types/character';
import type { LightCone } from './types/lightcone';
import type { Relic } from './types/relic';

export type { Character, LightCone, Relic };

export const languages = [
  'en',
  'es',
  'ja',
  'chs',
  'cht',
  'fr',
  'de',
  'id',
  'it',
  'ko',
  'pt',
  'ru',
  'th',
  'tr',
  'vi',
] as const;

export type Languages = (typeof languages)[number];

type Folders = 'characters' | 'lightcones' | 'relics';

export interface Options {
  language: Languages;
}

export interface QueryOpts<T> {
  select?: (keyof T)[];
}

export default class GenshinData {
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
