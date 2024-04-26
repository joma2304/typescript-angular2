export interface Course {
    code: string,
    coursename: string,
    progression: string,
    syllabus: string,
    [key: string]: string; //Allt som tillkommer blir av typen string

}
