import pool from '@/lib/db';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are all required' },
        { status: 400 }
      );
    }

    // email format checker test
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const result = await pool.query(
      'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *',
      [name, email, message]
    );

    return Response.json(
      { message: 'Submission received', contact: result.rows[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return Response.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}