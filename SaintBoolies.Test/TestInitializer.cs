using AutoMapper;
using Moq;
using NUnit.Framework;
using SaintBoolies.Db.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SaintBoolies.Test
{
    [TestFixture]
    internal class TestInitializer
    {
        protected static Mock<IMapper> MockMapper { get; set; }

        protected AppDbContext Context { get; set; }

        [SetUp]
        protected virtual void Initialize()
        {
            MockMapper = new Mock<IMapper>();
            var factory = new ConnectionFactory();
            Context = factory.CreateContextForInMemory();
            TestContext.WriteLine("Initialize test data");
        }

        [TearDown]
        protected virtual void Cleanup()
        {
            TestContext.WriteLine("Cleanup test data");
        }
    }
}
