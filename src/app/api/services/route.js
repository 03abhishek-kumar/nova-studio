import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM services ORDER BY id');
    return Response.json(result.rows);
  } catch (error) {
    console.error('Error fetching services:', error);
    return Response.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}