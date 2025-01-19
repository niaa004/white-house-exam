using System.ComponentModel.DataAnnotations;

namespace TrumpVerseAPI.Models
{
public class TrumpStaff : ITrumpStaff
{

        // Klasse for å representere ansatte i TrumpVerse -> unik ID
        [Key]
        public int ID {get; set;}

        public string? FirstName {get; set;}
        public string? LastName {get; set;}
        public string? Gender {get; set;}
        public string? Role {get; set;}
        public string? Email {get; set;}
        public string? PhoneNumber {get; set;}
        public DateTime DateOfHire {get; set;} 
        public bool IsActive {get; set;} 
        public string? ProfilePicture {get; set;} 
        

    }
}