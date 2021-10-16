import { Weather } from './Weather';

export interface Data{
    valid_date: Date;
    temp: Number;
    weather: Weather;
}