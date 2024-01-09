export default function getStudentIdsSum(students) {
  return students.reduce((accumulate, student) => accumulate + student.id, 0);
}
