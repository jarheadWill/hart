using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Data;

public class InventoryDbContext : DbContext
{
    public InventoryDbContext(DbContextOptions options)
        : base(options)
    {
    }
    
    public DbSet<Product> Products { get; set; }
}