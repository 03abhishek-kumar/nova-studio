import pool from '@/lib/db';

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    const result = await pool.query(
      'DELETE FROM projects WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return Response.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return Response.json({ message: 'Project deleted', project: result.rows[0] });
  } catch (error) {
    console.error('Error deleting project:', error);
    return Response.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}