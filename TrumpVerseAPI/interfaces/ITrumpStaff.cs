namespace TrumpVerseAPI.Models
{
    // Interface for TrumpStaff-modellen -> testing -> mocking
    public interface ITrumpStaff
    {
        int ID { get; set; }
        string? FirstName { get; set; }
        string? LastName { get; set; }
        string? Gender { get; set; }
        string? Role { get; set; }
        string? Email { get; set; }
        string? PhoneNumber { get; set; }
        DateTime DateOfHire { get; set; }
        bool IsActive { get; set; }
        string? ProfilePicture { get; set; }
    }
}