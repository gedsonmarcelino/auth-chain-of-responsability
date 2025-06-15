type SignInServiceParam = {
    username: string,
    password: string
}

export const signInService = async (params: SignInServiceParam) => {
    const URL = '/api/signin'

    try {
        const response = await fetch(URL, {
            method: "POST",
            body: JSON.stringify(params),
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        // TODO: create a handle error
        console.error(error.message);
    }
}