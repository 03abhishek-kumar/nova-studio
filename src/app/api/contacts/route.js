// get all contacts -- (admin only)
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query(
      'SELECT * FROM contacts ORDER BY created_at DESC'
    );
    return Response.json(result.rows);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return Response.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}