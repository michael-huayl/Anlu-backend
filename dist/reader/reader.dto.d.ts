export interface RegisterReaderDto {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    birthday: string;
    phoneNumber: string;
    homeAddress: string;
    province: string;
    postcode: string;
    securityQuestion: string;
    securityAnswer: string;
}
export interface UpdateReaderDto {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    birthday: string;
    phoneNumber: string;
    homeAddress: string;
    province: string;
    postcode: string;
    securityQuestion: string;
    securityAnswer: string;
}
export interface ChangeReaderPwdDto {
    username: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}
export interface FavourBookDto {
    bookID: string;
}
