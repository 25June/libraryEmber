import { helper } from '@ember/component/helper';
const authorPropertyTypes =[
  'Phan Mạnh Quỳnh',
  'Ed Sheeran',
  'Imagine Dragon',
  'Uyên',
  'Đen'
];
export function musicPropertyType([propertyType]) {
  if(authorPropertyTypes.includes(propertyType)) {
    return 'True'
  }
  return 'False';
}
export default helper(musicPropertyType);
