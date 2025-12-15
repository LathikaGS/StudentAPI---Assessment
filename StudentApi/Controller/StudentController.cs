using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentApi.Data;
using StudentApi.Models;

namespace StudentApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        private readonly AppDbContext _db;

        public StudentsController(AppDbContext db) => _db = db;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> Get() => await _db.Students.ToListAsync();

        [HttpPost]
        public async Task<ActionResult> Post(Student student)
        {
            _db.Students.Add(student);
            await _db.SaveChangesAsync();
            return Ok(student);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Student student)
        {
            var s = await _db.Students.FindAsync(id);
            if (s == null) return NotFound();
            s.Name = student.Name;
            s.Class = student.Class;
            s.Section = student.Section;
            await _db.SaveChangesAsync();
            return Ok(s);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var s = await _db.Students.FindAsync(id);
            if (s == null) return NotFound();
            _db.Students.Remove(s);
            await _db.SaveChangesAsync();
            return Ok();
        }
    }
}
