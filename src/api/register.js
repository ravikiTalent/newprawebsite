// pages/api/signup.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Basic server-side validation
    if (!email || !password || password.length < 6) {
      return res.status(400).json({ message: 'Invalid input. Email and password (min 6 characters) are required.' });
    }

    // In a real application, you would:
    // 1. Hash the password (e.g., using bcryptjs)
    // 2. Store the user in a database
    // 3. Handle potential errors (e.g., email already exists)

    // For demonstration, simulate a successful signup
    console.log(`User signup: Email - ${email}, Password - ${password}`);
    return res.status(201).json({ message: 'User registered successfully.' });

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}