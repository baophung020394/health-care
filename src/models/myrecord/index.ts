export interface MyDiary {
  mydiaryId: string
  date: string
  mydiaryTime: string
  mydiaryDes: string
  mydiaryTitle: string
}

export interface MyExercise {
  myexerciseId: string
  myexerciseTitle: string
  mydiaryTime: string
  mydiaryKcal: string
  date: string
}
