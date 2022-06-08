using System;
using System.Collections.Generic;
using System.Linq;

namespace Grouping_Operator
{
    class Program
    {

        class Class
        {
            public int ClassID { get; set; }
            public string ClassName { get; set; }
        }
        class Student
        {
            public int StudentID { get; set; }
            public string StudentName { get; set; }
            public int ClassID { get; set; }
        }
       
static void Main(string[] args)
        {
            List<Class> classes = new List<Class>();

            classes.Add(new Class { ClassID = 1, ClassName = "BSCS" });
            classes.Add(new Class { ClassID = 2, ClassName = "BSSE" });
            classes.Add(new Class { ClassID = 3, ClassName = "BSIT" });
            List<Student> students = new List<Student>();
            students.Add(new Student { ClassID = 1, StudentID = 1, StudentName = "Hamza" });
            students.Add(new Student { ClassID = 2, StudentID = 2, StudentName = "Zunaira" });
            students.Add(new Student { ClassID = 1, StudentID = 3, StudentName = "Zeeshan" });


            var result = from p in students
                group p by p.ClassID;
            foreach (var student in result)
            {
                Console.WriteLine("Class:" + student.Key);
                foreach (var st in student)
                {
                    Console.WriteLine(st.ClassID + "\t" + st.StudentName);
                }
            }
        }
    }
}
