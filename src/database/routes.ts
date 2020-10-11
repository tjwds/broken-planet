import knexHandle from './knex';

export default class ImageDatabase {
    constructor () {
        this.#knexHandle = knexHandle('images');
    }

    insert = (fileLocation: string) =>
        this.#knexHandle.insert({ file_location: fileLocation });

    getAllUnjudged = () =>
        this.#knexHandle('images').select('id', 'file_location').where({ has_been_judged: false });

    judge = (id: number, judgement: boolean) =>
        this.#knexHandle('images').where({ id }).update({
            'is_messed_up': judgement,
        });

    // TODO update judgement URLs for images

    // TODO get one messed up image

    #knexHandle: any; // todo fix me
}


