import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query('SELECT label, value FROM stats');
    return Response.json(result.rows);
  } catch (error) {
    console.error('Error fetching stats:', error);
    return Response.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}