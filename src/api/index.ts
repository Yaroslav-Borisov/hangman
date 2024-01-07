import axios from 'axios';

export default class NameApi {
	static async getName(): Promise<string> {
		const { data } = await axios.get<{FirstName: string}>('https://api.randomdatatools.ru/?unescaped=false&params=FirstName');
		const name = data.FirstName;
        
		return name;
	}
}