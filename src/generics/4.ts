type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
    return { ...initialValues };
}

export const newUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
