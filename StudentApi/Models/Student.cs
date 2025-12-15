namespace StudentApi.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Class { get; set; } = null!;
        public string Section { get; set; } = null!;
    }
}
