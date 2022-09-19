import { downloadWeather } from './utils.ts';

try {

    const json = await downloadWeather();

    await Deno.writeTextFile('./files/temperatura_madrid.json', JSON.stringify(json.main));
} catch (error) {
    console.log(error.message);
}